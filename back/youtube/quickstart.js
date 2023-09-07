const { google } = require('googleapis');
const express = require('express');
const app = express();
const OAuth2Client = google.auth.OAuth2;

const CLIENT_ID = '1081898326278-ra8eb5lnqdjqr0ufa4l831d5ve0m8qnv.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://accounts.google.com/o/oauth2/auth';

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Генерация URL для аутентификации
const getAuthUrl = () => {
  const scopes = ['https://www.googleapis.com/auth/youtube'];
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  });
  return authUrl;
};

// Получение токена доступа и кода обновления
const getTokens = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
};

// Пример обработки коллбэка при получении кода авторизации
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  await getTokens(code);
  res.send('Авторизация успешна! Теперь вы можете использовать YouTube API.');
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
  console.log('Для аутентификации перейдите по указанному URL:');
  console.log(getAuthUrl());
});