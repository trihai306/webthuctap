

function Introduce() {

    return (
        <div className="introduce">
            <div className="introduce-title">
                One account, three powerful tools to grow your business
            </div>
            <div className="introduce-footer">
                <div className="animate-in promo-m360">
                    <img 
                        alt="Marketing 360" 
                        style={{width:'160px', verticalAlign:'middle'}} 
                        src="https://d22if4xzkonim2.cloudfront.net/logo-marketing360.svg" 
                    />
                    <p>All the tools you need to grow and manage your business</p>
                </div>
                <div className="animate-in delay1 promo-w360">
                    <img 
                        alt="Websites 360" 
                        style={{width:'160px', verticalAlign:'middle'}} 
                        src="	https://d22if4xzkonim2.cloudfront.net/logo-websites360.svg" 
                    />
                    <p>Beautiful websites that drive results</p>
                </div>
                <div className="animate-in delay2 promo-trl">
                    <img 
                        alt="Top Rated Local" 
                        style={{width:'160px', verticalAlign:'middle'}} 
                        src="https://d22if4xzkonim2.cloudfront.net/logo-trl.svg" 
                    />
                    <p>Monitor reviews and manage your online reputation</p>
                </div>
            </div>
        </div>
    )
}

export default Introduce;