//Core
import React, { Component } from 'react';
import {} from 'prop-types';

//Instruments
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
const CheckboxTable = checkboxHOC(ReactTable);

export default class Table extends Component {
    state = {
        selection: [],
        selectAll: false,
        data: [
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
            {
                _id: Math.random(),
                name: 'Oleksa',
                email: 'roquefore@gmail.com',
                country: 'Oleksa',
                categories: 'blalbalasd',
            },
        ],
    };

    toggleSelection = (key, shift, row) => {
        /*
          Implementation of how to manage the selection state is up to the developer.
          This implementation uses an array stored in the component state.
          Other implementations could use object keys, a Javascript Set, or Redux... etc.
        */
        // start off with the existing state
        let selection = [...this.state.selection];
        const keyIndex = selection.indexOf(key);
        // check to see if the key exists
        if (keyIndex >= 0) {
            // it does exist so we will remove it using destructing
            selection = [
                ...selection.slice(0, keyIndex),
                ...selection.slice(keyIndex + 1),
            ];
        } else {
            // it does not exist so add it
            selection.push(key);
        }
        // update the state
        this.setState({ selection });
    };

    toggleAll = () => {
        /*
          'toggleAll' is a tricky concept with any filterable table
          do you just select ALL the records that are in your data?
          OR
          do you only select ALL the records that are in the current filtered data?
          
          The latter makes more sense because 'selection' is a visual thing for the user.
          This is especially true if you are going to implement a set of external functions
          that act on the selected information (you would not want to DELETE the wrong thing!).
          
          So, to that end, access to the internals of ReactTable are required to get what is
          currently visible in the table (either on the current page or any other page).
          
          The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
          ReactTable and then get the internal state and the 'sortedData'. 
          That can then be iterrated to get all the currently visible records and set
          the selection state.
        */
        const selectAll = this.state.selectAll ? false : true;
        const selection = [];
        if (selectAll) {
            // we need to get at the internals of ReactTable
            const wrappedInstance = this.checkboxTable.getWrappedInstance();
            // the 'sortedData' property contains the currently accessible records based on the filter and sort
            const currentRecords = wrappedInstance.getResolvedState()
                .sortedData;
            // we just push all the IDs onto the selection array
            currentRecords.forEach((item) => {
                selection.push(item._original._id);
            });
        }
        this.setState({ selectAll, selection });
    };

    isSelected = (key) => {
        /*
          Instead of passing our external selection state we provide an 'isSelected'
          callback and detect the selection state ourselves. This allows any implementation
          for selection (either an array, object keys, or even a Javascript Set object).
        */
        return this.state.selection.includes(key);
    };

    render() {
        const { toggleSelection, toggleAll, isSelected } = this;
        const { selectAll, data } = this.state;

        const checkboxProps = {
            selectAll,
            isSelected,
            toggleSelection,
            toggleAll,
            selectType: 'checkbox',
        };

        return (
            <CheckboxTable
                ref={(r) => (this.checkboxTable = r)}
                data={data}
                columns={[
                    {
                        accessor: '_id',
                        Header: 'Id',
                    },
                    {
                        accessor: 'name',
                        Header: 'Name',
                    },
                    {
                        accessor: 'email',
                        Header: 'Email',
                    },
                    {
                        accessor: 'country',
                        Header: 'Country',
                    },
                    {
                        accessor: 'categories',
                        Header: 'Categories',
                    },
                ]}
                className="table -highlight"
                defaultPageSize={10}
                getTrProps={(state, rowInfo, column, instance) => {
                    console.log(rowInfo);

                    return {
                        style: {
                            padding: '5px 0',
                            textAlign: 'center',
                        },
                    };
                }}
                getTheadTrProps={(state, rowInfo, column, instance) => {
                    return {
                        style: {
                            padding: '5px 0',
                            backgroundColor: '#F5F5F7',
                            borderBottom: '1px solid #DBDBDB',
                        },
                    };
                }}
                {...checkboxProps}
            />
        );
    }
}
