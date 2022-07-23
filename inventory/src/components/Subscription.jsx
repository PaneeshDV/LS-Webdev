import React from "react";
const Subscription = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-4 m-4">
                <h4>Wanna know about the latest info</h4>
                <h6>Then Subscribe to our newsletter.</h6>
            </div>
            <div className="col-md-6">
                <div className="container-fluid">
                    <form className="row g-3">
                        <div className="col-12">
                            <label for="inputName" class="form-label mb-0">Name</label>
                            <input type="text" class="form-control border-primary" id="inputName" />
                        </div>
                        <div className="col-md-8">
                            <label for="inputEmail" class="form-label mb-0">Email</label>
                            <input type="email" class="form-control border-primary" id="inputEmail" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputRoomno" class="form-label mb-0">Room Number</label>
                            <input type="number" class="form-control border-primary" id="inputRoomno" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-outline-warning mt-3 p-2 border-rounded"><h5>Submit</h5></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Subscription