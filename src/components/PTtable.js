import React from 'react';
import { MDBDataTable } from 'mdbreact';
import theHarvesterOutput from '../theHarvesterOutput.json'


const PTtable = () => {
  const rows = theHarvesterOutput.map(item => ({ asset: item.asset, IPaddress: item.IP_Address }))
  const data = {
    columns: [
      {
        label: 'asset',
        field: 'asset',
        sort: 'asc',
        width: 150
      },
      {
        label: 'IP address',
        field: 'IPaddress',
        sort: 'asc',
        width: 270
      }
    ],
    rows
 
  };

  return (
    <MDBDataTable
   //  entriesOptions={false} 
     entries={10} 
      searching={false}
      striped
      bordered
      small
    hover
      data={data}
    />
  );
}

export default PTtable;