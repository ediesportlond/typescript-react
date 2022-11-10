export interface PhotoCardType {
    photo: string,
    user: string,
    description: string,
    mainPhoto: string,
    likeCount: number
}

export interface PhotoCardProp {
    card: PhotoCardType
}

export default function PhotoCard({ card }: PhotoCardProp) {
    return (
        <>
            <div
                className="photo-card">
                <div
                    className="card-header">
                    <img
                        src={card.photo}
                        alt={card.description} />
                    <h3
                        className="card-user">
                            {card.user}
                            </h3>
                </div>
                <img
                    src={card.mainPhoto}
                    alt={card.description} />
                <p>{card.description}</p>
                <p>Likes: {card.likeCount}</p>
            </div>
        </>
    )
}