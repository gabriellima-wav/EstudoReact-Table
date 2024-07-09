export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'Id'
    },

    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'First_name'
    },

    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },

    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
    },

    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'Country'
    },

    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    }

]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'Id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'First_name'
            },
        
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },  
]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
        
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'Country'
            },
        
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]