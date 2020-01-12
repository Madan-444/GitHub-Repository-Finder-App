import React from 'react'

export const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{alert.msg}</strong> 
                    {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close" value={alert} onClick= {this.props.ReverseAlert} >
                    <span aria-hidden="true">&times;</span>
                </button> */}
            </div>
        )
    )
}
