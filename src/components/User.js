import React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "../store/actions/fetchAction";

const User = (props) => {

    return (
        <div className="user-full">
            {props.data.results.filter(obj => {
                return obj.login.uuid === props.history.location.pathname.substr(1);
            }).map((obj, idx) => {
                return (
                    <p key={idx}>
                        Name: {obj.name.title} < br />
                        Email: {obj.cell} <br />
                    </p>
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