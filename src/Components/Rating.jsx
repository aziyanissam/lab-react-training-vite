import React from 'react'

function Rating(props) {
    const ratingFunnction = (rating) => {
        if (rating >= 0 && rating < 0.5) {
            return '☆☆☆☆☆';
        } else if (rating >= 0.5 && rating < 1) {
            return '★☆☆☆☆';
        } else if (rating >= 1 && rating < 1.5) {
            return '★★☆☆☆';
        }
        else if (rating >= 1.5 && rating < 2) {
            return '★★★☆☆';
        }
        else if (rating >= 2 && rating < 2.5) {
            return '★★★★☆';
        }
        else if (rating >= 2.5 && rating < 3) {
            return '★★★★★';
        }

    }
    return (
        <div>
            {ratingFunnction(props.children)}
        </div>
    )
}

export default Rating
