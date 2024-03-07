import Flower from "../../assets/flower.png"; 
import Grass from "../../assets/of08_twkx_210818.jpg";
import "./CreateGarden.scss";
function CreateGarden ({ completedCount }) {

    const flowers = Array(completedCount).fill().map((_, index) => index);

    return (
        <section className="garden">
            <h2 className="garden__title"> My Garden </h2>
            <div>
                {flowers.map((flowerIndex) => (
                    <img 
                    key={flowerIndex}
                    className="garden__image"
                    src={Flower}
                    alt={`flower-${flowerIndex}`}
                    />
                ))}
            </div>
            <div className="garden__dirt"></div>
        </section>
    )
}

export default CreateGarden;