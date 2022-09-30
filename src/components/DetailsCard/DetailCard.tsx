import PropTypes from "prop-types";
import './detailCard.css';

export const DetailCard = ({ title, urlImg }: any) => {
    return (
        <>
            <div className="card" style={{ width: '15rem', margin: '7px'}}>
                <img src={urlImg} className="img-detail" alt="..." />
                    <h5 className="title-detail">{title}</h5>
            </div>
        </>
    )
}

DetailCard.propTypes = {
    title: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired
}