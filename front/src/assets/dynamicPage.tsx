import {useEffect} from "react";

type dynamicPageT = {
    title: string,
    description?: string;
}
const DynamicPage = ({ title, description }: dynamicPageT) => {
    useEffect(() => {
        document.title = `Вкамне – ${title} – Продажа камней в Санкт-Петербурге`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) return;
        if (description) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription.setAttribute('content', 'Мы работаем с различными видами камня, включая гранит, мрамор, известняк и травертин. Наша команда профессионалов имеет богатый опыт работы с камнем и всегда готова предложить нашим клиентам лучшие решения для их проектов. ');
        }

    }, [title, description]);

    return <></>;
};

export default DynamicPage;