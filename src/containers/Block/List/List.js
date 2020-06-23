import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "../../../store/actions/fetchAction";
import { onFindUser } from "../../../store/actions/filterAction";
import '../../../table.css';
import './list.css'

const List = (props) => {
    const [list, setList] = useState([]);

    const searchInput = useRef(null);
    const findValue = () => {
        setList(list.filter(item => {
            console.log(searchInput.current.value)
            return (item.name.first + ' ' + item.name.last).toLowerCase().includes(searchInput.current.value.toLowerCase())
        })
        )
    }
    const handleSortAge = () => {
        const sortedAge = [...list].sort((a, b) => {
            return b.dob.age - a.dob.age;
          });
          setList(sortedAge);
    }
    const handleSortName = () => {
        const sortedName = [...list].sort((a,b) => {
            if(a.name.last.toLowerCase() < b.name.last.toLowerCase()){return -1}
            if(a.name.last.toLowerCase() > b.name.last.toLowerCase()){return 1}
            return 0
        })
        setList(sortedName)
    }

    useEffect(() => {
        props.loadUsers()
    }, []);

    useEffect(() => {
        setList(props.data.results)
    }, [props]);

    const postSelectedHandler = (id) => {
        props.history.push('/' + id);
    }
    return (
        <div>
            {list !== undefined ?
                <div className="List">
                    <div className="filter__wrapper">
                        <div>
                            <input type="text" ref={searchInput} />
                            <button onClick={findValue}>Find by Name</button>
                        </div>
                        <div>
                            <button className="btn__name--sort" onClick={handleSortAge}>Sort by name</button>
                        </div>
                        <div>
                            <button className="btn__age--sort" onClick={handleSortName}>Sort by age</button>
                        </div>
                    </div>
                    <div class="table">


                              <div class="table-content">
                    {list.map((obj, i) => {
                        return<div class="container">


                                  <div class="table-row" key={i} onClick={() => postSelectedHandler(obj.login.uuid)}>
                                      <div class="table-data"><p>{obj.name.title + " " + obj.name.first + " " + obj.name.last}</p>
                          </div>
                                      <div class="table-data"><p>{obj.dob.age}</p></div>
                                  </div>
                                </div>



                    })}
                        </div>
                        </div>
                </div>
                :
                <div>Loading</div>}

        </div>
    )
}

const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
});

const mapDispatchToProps = {
    loadUsers,
    onFindUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);