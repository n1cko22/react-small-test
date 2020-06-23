import React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "../store/actions/fetchAction";
import '../table.css'

const User = (props) => {

    return (
        <div className="user-full">
            {props.data.results.filter(obj => {
                return obj.login.uuid === props.history.location.pathname.substr(1);
            }).map((obj, idx) => {
                return (
                    <div key={idx} className="container__wrapper">
                        <img src={obj.picture.large} /> <br />
                        <div class="container">
                            <div class="table">
                                <div class="table-content">
                                    <div class="table-row">
                                        <div class="table-data">Name:</div>
                                        <div class="table-data">{obj.name.title + " " + obj.name.first + " " + obj.name.last}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Nationality:</div>
                                        <div class="table-data">{obj.nat}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Age:</div>
                                        <div class="table-data">{obj.dob.age}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Date:</div>
                                        <div class="table-data">{obj.dob.date}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Gender:</div>
                                        <div class="table-data">{obj.gender}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Email:</div>
                                        <div class="table-data">{obj.email}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Phone:</div>
                                        <div class="table-data">{obj.phone}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Cell:</div>
                                        <div class="table-data">{obj.cell}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Location:</div>
                                        <div class="table-data">{obj.location.country},
                                            {obj.location.city},
                                            {obj.location.postcode},
                                            {obj.location.street.name} {obj.location.street.number}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Username:</div>
                                        <div class="table-data">{obj.login.username}</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">Date of registry:</div>
                                        <div class="table-data">{obj.registered.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}


const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);