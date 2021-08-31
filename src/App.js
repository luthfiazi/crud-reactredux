import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  state = {
    title:"Keycode Solution", 
    users: [
      {
        id: 1,
        nama: 'luthfi',
        alamat: 'Bandung',
        umur: 24,
        NoHp: '1234567890',
      },
      {
        id: 2,
        nama: 'Anggi',
        alamat: 'Lebak',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 3,
        nama: 'Dalvin',
        alamat: 'Jayapura',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 4,
        nama: 'luthfi',
        alamat: 'Bandung',
        umur: 24,
        NoHp: '1234567890',
      },
      {
        id: 5,
        nama: 'Anggi',
        alamat: 'Lebak',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 6,
        nama: 'Dalvin',
        alamat: 'Jayapura',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 7,
        nama: 'luthfi',
        alamat: 'Bandung',
        umur: 24,
        NoHp: '1234567890',
      },
      {
        id: 8,
        nama: 'Anggi',
        alamat: 'Lebak',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 9,
        nama: 'Dalvin',
        alamat: 'Jayapura',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 10,
        nama: 'Anggi',
        alamat: 'Lebak',
        umur: 24,
        NoHp: '1234567890'
      },
      {
        id: 11,
        nama: 'Dalvin',
        alamat: 'Jayapura',
        umur: 24,
        NoHp: '1234567890'
      }
    ]
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}
