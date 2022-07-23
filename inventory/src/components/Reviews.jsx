import React from "react";
const Reviews = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <h2 className="text-primary">Reviews:</h2>
                </div>
                <div className="col-md-5">
                    <div id="carouselSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="card bg-light">
                                    <div className="card-body border border-warning">
                                        <h5 class="card-title text-center text-warning">Verstappen</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam quos. Esse quo deserunt obcaecati necessitatibus non ab. Ea officiis quisquam laborum aliquam nemo numquam reprehenderit, aperiam reiciendis impedit quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <div className="card bg-light">
                                    <div className="card-body border border-primary">
                                        <h5 class="card-title text-center text-primary">Hamilton</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam quos. Esse quo deserunt obcaecati necessitatibus non ab. Ea officiis quisquam laborum aliquam nemo numquam reprehenderit, aperiam reiciendis impedit quasi.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <div className="card bg-light">
                                    <div className="card-body border border-danger">
                                        <h5 class="card-title text-center text-danger">Schumacher</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam quos. Esse quo deserunt obcaecati necessitatibus non ab. Ea officiis quisquam laborum aliquam nemo numquam reprehenderit, aperiam reiciendis impedit quasi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews