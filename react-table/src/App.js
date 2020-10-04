import React from 'react';
import MaterialTable from 'material-table';
import {MuiThemeProvider} from "@material-ui/core";
import {hoverColor, searchPlaceholder, theme} from "./Utils";
import {CountSquare} from "./CountSquare";
import {Task} from "./Task";
import {DueDate} from "./DueDate";
import {Status} from "./Status";
import {MyToolbar} from "./MyToolbar";
import {constData} from "./Data";
import {tableIcons} from "./Icons";


function App() {

    const [data, setData] = React.useState(
        constData,
    )

    const getCount = (id) => {
        let count = 0;
        for (let i = 0; i < constData.length; i++) {
            if (constData[i].parentId === id) {
                count++;
            }
        }
        return count;
    }

    const handleStatusChange = (id, value) => {
        const tempData = data.slice();
        tempData[id - 1].status = value;
        setData(tempData);
    }

    const columns = [
        {
            title: 'Count', editable: 'never',
            render: rowData => {
                let count = getCount(rowData.id);
                return !count ?
                    <></>
                    :
                    CountSquare(count, rowData.color);
            }
        },
        {
            title: 'Task', field: 'task',
            cellStyle: {
                minWidth: '30%',
                width: '30%'
            },
            headerStyle: {
                minWidth: '30%',
                width: '30%'

            },
            editable: 'never',
            customFilterAndSearch: (term, rowData) => {
                return rowData.task.title ?
                    rowData.task.title.toLowerCase().includes(term.toLowerCase()) || rowData.task.content.toLowerCase().includes(term.toLowerCase())
                    :
                    rowData.task.toLowerCase().includes(term.toLowerCase());
            },
            render: rowData => {
                return Task(rowData, handleStatusChange)
            }
        },
        {title: 'Evaluation', field: 'evaluation', editable: 'never'},
        {title: 'Priority', field: 'priority', editable: 'never'},
        {
            title: 'Due', field: 'dueDate', type: 'date',
            editable: 'never',
            render: rowData => {
                return DueDate(rowData);
            }
        }
        ,
        {
            title: 'Age',
            field: 'age',
            type: 'numeric',
            editable: 'never',
            render: rowData => rowData.age ? rowData.age + ' month' : <></>,
        },
        {
            title: 'Status', field: 'status',
            render: rowData => Status(rowData, handleStatusChange),
        },
    ]

    const filter = text => {
        const tempData = data.slice();
        let tempValue = '';
        switch (text) {
            case 'TODO':
                tempValue = 'To Do';
                break;
            case 'IN PROGRESS':
                tempValue = 'In Progress';
                break;
            case 'SKIPPED':
                tempValue = 'Skipped';
                break;
            case 'FINISHED':
                tempValue = 'Finished';
                break;
            default:
                setData(constData);
                return;
        }
        setData(tempData.filter(value => {
            return value.status === tempValue;
        }))
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{maxWidth: '100%'}}>
                <MaterialTable
                    onRowClick={(event, rowData) => {
                    }}
                    icons={tableIcons}
                    columns={columns}
                    data={data}
                    title="Information"
                    parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                    options={{
                        rowStyle: rowData => {
                            return {
                                backgroundColor: rowData.isMain ? hoverColor : '#ffffff',
                            }
                        },
                        defaultExpanded: true,
                        searchFieldAlignment: "left",
                        showTitle: false,
                    }}
                    localization={{
                        header: {
                            actions: ''
                        },
                        toolbar: {
                            searchPlaceholder: searchPlaceholder,
                        },
                    }}
                    components={{
                        Toolbar: props => MyToolbar(props, filter)
                    }}
                />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
