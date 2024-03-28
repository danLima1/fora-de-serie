import { useEffect } from "react";
import privacyContent from "../../data/privacyContent";

const Privacy = () => {
    useEffect(() => {
        document.title = "Privacidade | fora de Série";
    }, []);
    return (
        <main className="terms">
           
            {privacyContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
            
        </main>
    )
}

export default Privacy;