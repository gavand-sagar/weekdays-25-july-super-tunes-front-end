import React from 'react'
import { useState } from 'react'

export default function RatingAndForm() {
    const [rating, setRating] = useState(0);

    const getSomeCalculatedHtml = () => {
        return ''
    }

    return (
        <div>
            <input
                value={rating}
                onChange={e => setRating(e.target.value)}
                type="number"
                placeholder="Rating" />

            <button>Add Rating</button>
            <br />
            <br />
            current rating
            <br />

            {getSomeCalculatedHtml()}

            {/* {(rating >= 1) && <span> &#9733;</span>}
            {(rating >= 2) && <span> &#9733;</span>}
            {(rating >= 3) && <span> &#9733;</span>}
            {(rating >= 4) && <span> &#9733;</span>}
            {(rating >= 5) && <span> &#9733;</span>} */}

        </div>
    )
}
