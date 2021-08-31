import React from 'react'

import {Button, Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar } = Search;

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
    return {width:"5%"};
  },
}, {
  dataField: 'nama',
  sort: true,
  text: 'Nama'
}, {
  dataField: 'alamat',
  sort: true,
  text: 'Alamat'
}, {
    dataField:"link",
    text:"Action",
    formatter:(rowContent, row)=>{
            return (
                <div>
                    <Button color="secondary" className="mr-2">
                        <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                    <Button color="secondary" className="mr-2">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                    <Button color="secondary" className="mr-2">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </Button>
                </div>
            )
        }
    }
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4 
                keyField='id' 
                data={ props.users } 
                columns={ columns }  
                defaultSorted={ defaultSorted } 
                search
                >
                {(props) => (
                    <div>
                        <div className="float-right">
                        <SearchBar { ...props.searchProps } placeholder="Search..." />
                        </div>
                        <BootstrapTable { ...props.baseProps } pagination={ paginationFactory()} />
                    </div>
                    )}
            </ToolkitProvider>
        </Container>
    )
}

export default TableComponent
