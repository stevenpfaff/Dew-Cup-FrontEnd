import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section id="about">
                    <h2>Pfaff Backyard Sports</h2>
                    <p>
                        We are a group of friends and family who love to get together and play backyard sports games
                        we created growing up together. We have been putting together tournaments since 2019. This 
                        site is designed to act as a record book for those tournaments.
                    </p>
                    <div className="gallery">
                        <img src="./Images/dewcup1.jpg" alt="Dew Cup 2019" />
                        <img src="./Images/boons1.jpg" alt="Bud Wood 2021" />
                    </div>
                </section>

                <section id="about">
                    <h2>Dew Cup</h2>
                    <p>
                        The Dew Cup was the original kickstarter for us and our main tournament. 
                        In 2019 our dear friend Bud Wood came from
                        out of state to play pond hockey, not something he had been able to do in his home state. We 
                        had to put on a tournament for the occasion. Bud has come back to participate every year since. 
                        Despite being the best player in the tournament, The Dew Cup continues to elude him. Unfortunately
                        The Dew Cup was canceled in 2024 due to poor weather. 
                    </p>
                    <div className="gallery">
                        <img src="./Images/sqd.jpg" alt="Squid Niqs 2023 Dew Cup" />
                        <img src="./Images/group.jpg" alt="2023 Dew Cup Group" />
                    </div>
                </section>

                <section id="about">
                    <h2>Buddy Wood Memorial</h2>
                    <p>
                        In 2021 we decided to expand into another sport with our own made up game, minibat baseball. 
                        Due to Bud not being able to make it or being very good at baseball, we dedicated this tournament to him.
                    </p>
                    <div className="gallery">
                        <img src="./Images/squid.jpg" alt="Squid Niqs 2024 Buddy Wood Memorial" />
                        <img src="./Images/bgm.jpg" alt="Goobies Mum 2023 Bud Wood Memorial" />
                    </div>
                </section>

                <section id="about">
                    <h2>Jemile Weeks Homerun Derby</h2>
                    <p>
                        Folowing every Buddy Wood Memorial, a homerun derby takes place in honor of the great major leaguer
                        Jemile Weeks.
                    </p>
                    <div className="gallery">
                        <img src="./Images/bbderby.jpg" alt="2022 Jemile Weeks Winner" />
                        <img src="./Images/zubderby.jpg" alt="2021 Jemile Weeks Winner" />
                    </div>
                </section>

                <section id="about">
                    <h2>Code Red Classic</h2>
                    <p>
                        In 2022, the weather was near perfect for pond hockey and it allowed us to operate a second tournament.
                        Unfortunately, this could not be registered as a Dew Cup due to Mr. Wood being away at basic training.
                    </p>
                    <div className="gallery">
                        <img src="./Images/bgmcrc.jpg" alt="Goobies Mum 2022 Code Red Classic" />
                        <img src="./Images/rgm.jpg" alt="Rat Girl Minions 2022 Code Red Classic" />
                    </div>
                </section>

                <section id="about">
                    <h2>Coors Clash</h2>
                    <p>
                        The Fellas began routinely getting together on Sunday afternoons during the summer in 2022 to play
                        minibats. We began tracking this as the Coors Clash, which can be looked at as similar to a "regular season"
                        that leads up to the Buddy Wood Memorial.
                    </p>
                    <div className="gallery">
                        <img src="./Images/coors1.PNG" alt="2022 Coors Clash" />
                        <img src="./Images/hont.PNG" alt="Deer Hunt in action" />
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
