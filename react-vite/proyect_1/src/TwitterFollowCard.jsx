import './App.css'

export function TwitterFollowCard ({ userName, name, avatar, isFollowing}) {
    const imageSrc = `https://th.bing.com/th/id/${avatar}`
    //"https://th.bing.com/th/id/OIG.ZVvkuv3wJdMdUR4Kri2q?w=1024&h=1024&rs=1&pid=ImgDetMain"
    return (
        <article className="tw-folowCard">
            <header className="tw-folowCard-header">
                <img
                    className="tw-folowCard-img"
                    src={imageSrc}
                    alt="El avatar de Emi" />
            <div className="tw-folowCard-info">
                <strong>{name}</strong>
                <span>{userName}</span>
            </div>
            </header>
            
            <aside>
                <button className="tw-folowCard-button">
                    Segir
                </button>
            </aside>
        </article>
    )
}