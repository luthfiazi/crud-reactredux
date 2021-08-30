import React from 'react'

import {Button, Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'nama',
  text: 'Nama'
}, {
  dataField: 'alamat',
  text: 'Alamat'
}, {
    dataField:"link",
    text:"Action",
    formatter:(rowContent, row)=>{
            return (
                <div>
                    <Button color="secondary" className="mr-3">
                        <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                    <Button color="secondary" className="mr-3">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                    <Button color="secondary" className="mr-3">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </Button>
                </div>
            )
        }
    }
];



const TableComponent = (props) => {
    return (
        <Container>
            <BootstrapTable keyField='id' data={ props.users } columns={ columns } />
        </Container>
    )
}

export default TableComponent
