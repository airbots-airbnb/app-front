import React from 'react'
import IMG from '../../images/place-1.jpg';

function Alojamientos(){
    return(
        <div className="container">
				<div className="row row-bottom-padded-md">
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box fadeInUp animated">
                            <img src={IMG} className="img-responsive"/>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">30% Discount to Travel</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box fadeInUp animated">
                        <img src={IMG} className="img-responsive"/>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">Planning for Vacation</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
					<div className="clearfix visible-sm-block"></div>
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-blog animate-box fadeInUp animated">
                        <img src={IMG} className="img-responsive"/>
							<div className="blog-text">
								<div className="prod-title">
									<h3><a href="#">Visit Tokyo Japan</a></h3>
									<span className="posted_by">Sep. 15th</span>
									<span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									<p><a href="#">Learn More...</a></p>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
    )
}

export default Alojamientos;