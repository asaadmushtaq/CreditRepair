import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from "react-bootstrap-table2-filter";
// import cellEditFactory from 'react-bootstrap-table2-editor';

export default function MyDataTable(props) {
    const { SearchBar } = Search;
    return (<section className="DataTableSection p-4">
        <div className="mb-0">
            {/* <div className="card-header">
                        <header>{props.pageName}
                            {props.headerBtn}
                        </header>
                    </div> */}
            <div className="randox">
                {props.data
                    &&
                    props.data.length > 0 ?
                    <ToolkitProvider
                        keyField="id"
                        data={props.data}
                        columns={props.columns}
                        exportCSV
                        search
                    >
                        {
                            (props) => (
                                <div>

                                    {/* <SearchBar {...props.searchProps} /> */}
                                    <SearchBar
                                        {...props.searchProps}
                                        style={{ width: "250px", height: "40px", marginBottom: '1rem' }}
                                    />
                                    <BootstrapTable
                                        {...props.baseProps}
                                        bootstrap4
                                        keyField='id'
                                        defaultSorted={props.defaultSorted}
                                        onDataSizeChange={props.handleDataChange}
                                        hover
                                        condensed
                                        filter={filterFactory()}
                                        pagination={paginationFactory()}
                                        bordered={false}
                                        wrapperClasses="table-responsive"
                                        headerWrapperClasses="archived-table-appointment-head"
                                        bodyClasses="archived-table-appointment-body"
                                    //  cellEdit={ cellEditFactory({ mode: 'click' }) }  
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                    :
                    <p className="text-center">No Record Found</p>
                }
            </div>
        </div>
    </section>
    )
}

