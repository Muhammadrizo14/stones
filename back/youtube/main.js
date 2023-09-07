const { google } = require('googleapis');
const fs = require('fs');
const videoStream = fs.createReadStream('./video.mp4');
const credentials = JSON.parse(fs.readFileSync('client_secret.json'));


const runUpload = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: credentials,
    scopes: ['https://www.googleapis.com/auth/youtube.upload']
  });

  const authClient = await auth.getClient();

  const youtube = google.youtube({
    version: 'v3',
    auth: authClient
  });

  try {
    const res = await youtube.videos.insert({
      part: 'snippet,status',
      requestBody: {
        snippet: {
          title: 'Заголовок видео',
          description: 'Описание видео'
        },
        status: {
          privacyStatus: 'public'
        }
      },
      media: {
        body: videoStream
      }
    });

    console.log('Видео успешно загружено на YouTube!');
  } catch (error) {
    console.error('Ошибка при загрузке видео:', error);
  }
};

runUpload();