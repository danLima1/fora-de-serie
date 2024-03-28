import { useEffect } from "react";
import termsContent from "../../data/termsContent";

const Terms = () => {
    useEffect(() => {
        document.title = "Termos | fora de Série";
    }, []);
    return (
        <main className="terms">
            
            {termsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Terms;