import { useEffect } from "react";
import refundsContent from "../../data/refundsContent";

const Refunds = () => {
    useEffect(() => {
        document.title = "Devolução | fora de Série";
    }, []);
    return (
        <main className="terms">
            
            {refundsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Refunds;