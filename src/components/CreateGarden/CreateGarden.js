import Flower from "../../assets/flower.png"; 
import "./CreateGarden.scss";
function CreateGarden ({ completedCount }) {

    const flowers = Array(completedCount).fill().map((_, index) => index);
    

    if (completedCount === 0 ) {
        return (
            <>
            <h2 className="garden__title"> My Garden </h2>
            <p className="no-flower-message">Complete tasks to grow flowers!</p>
           
            </>
        )
    }

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