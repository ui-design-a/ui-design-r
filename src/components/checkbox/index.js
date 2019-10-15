/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-10-15 13:40:50
 * @LastEditors: lvjing
 * @LastEditTime: 2019-10-15 15:25:29
 */
import React, { Component } from 'react';

import './index.less';

import PropTypes from 'prop-types';

export default class Checkbox extends Component {

    componentDidUpdate() {
        try{
            this.props.onChange(this.props.defaultChecked)
        }
        catch{
            console.error("error")
        }
    }

    render() {
        return(
            <div className={['sm-checkbox', this.props.disabled ? 'sm-checkbox-disabled' : null].join(' ')}
                style={this.props.style}>
                <span
                    onClick={this.props.onClick}
                    className={['sm-checkbox-wapper',
                    this.props.defaultChecked ? `sm-checkbox-checked-${this.props.type}` : '',
                    this.props.disabled ? 'sm-checkbox-disabled' : null].join(' ')}
                >
                    {
                        this.props.defaultChecked ? <i className='iconfont icon-gouxuan-'></i> : null
                    }
                </span>
                { this.props.children }
            </div>
        )
    }
}


Checkbox.Prototype = {
    defaultChecked: PropTypes.oneOf([true, false]),
    type: PropTypes.oneOf(['primary', 'danger', 'warning']),
    onClick: PropTypes.func
}

Checkbox.defaultProps = {
    defaultChecked: false,
    type: 'primary'
}