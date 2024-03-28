import { Link } from "react-router-dom";
import { useEffect } from "react";
//components
import ResetLocation from "../../helpers/ResetLocation";
//data
import careers from "../../data/careers";

const Careers = () => {
    useEffect(() => {
        document.title = "Careers | Fora de série";
    }, []);
    return (
        <main className="careers">
            <h2>Carreiras</h2>
            <h3>Se você acha que pode agregar valor com sua experiência, paixão e trabalho árduo, você pode ser o ÚNICO!</h3>
            <section className="careers-section">
                {careers.map((career) =>
                    <section key={career.id} className="careers-listing">
                        <section className="single-listing">
                            <h4>{career.title}</h4>
                            <p>{career.description}</p>
                            <hr />
                        </section>
                        <Link to="/contact" onClick={ResetLocation}>Apply</Link>
                    </section>
                )}
            </section>
        </main>
    )
}

export default Careers;