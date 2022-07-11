import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/29465472.jpg?k=7c0133d14c54156613fb89d3baa5bf95ca41241d9805dd2da83092387dd75edc&o=" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Cheval Three Quays at The Tower of London</h1>
                <span className="siDistance">3.3 km from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Subway Access, located next to the Tower of London, and overlooking the Thames River
                </span>
                <span className="siFeatures">
                    Cheval Three Quays features modern apartments with free Wi-Fi, and an on-site fitness center. Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>9.2</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$612</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem