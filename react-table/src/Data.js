import {assistanceColor, overdueColor, todayColor} from "./Utils";

export const constData = [
    {
        id: 1,
        color: overdueColor,
        task: 'Overdue',
        isMain: true,
    },
    {
        id: 2,
        color: assistanceColor,
        task: 'Assistance Requests',
        isMain: true,
    },
    {
        id: 3,
        color: todayColor,
        task: 'Today',
        isMain: true,
    },
    {
        id: 4,
        parentId: 1,
        task: {
            title: 'Task Name',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            required: true,
        },
        evaluation: 'Vestibulum Ut Limited',
        priority: 'High',
        dueDate: '06/30/2020',
        age: 1,
        status: 'In Progress',
        color: overdueColor,
    },
    {
        id: 5,
        parentId: 2,
        task: {
            title: 'Magna Industries',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        evaluation: 'Vestibulum Ut Limited',
        priority: 'High',
        dueDate: '07/25/2020',
        age: 1,
        status: 'In Progress',
        color: assistanceColor,
    },
    {
        id: 6,
        parentId: 3,
        task: {
            title: 'Augue Eu Pc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        evaluation: 'Vestibulum Ut Limited',
        priority: 'High',
        dueDate: '07/14/2020',
        age: 1,
        status: 'In Progress',
        color: todayColor,
    },
    {
        id: 7,
        parentId: 4,
        task: {
            title: 'Sub Task Name',
            content: 'subtask content',
        },
        priority: 'High',
        status: 'Skipped',
        isSubTask: true,
        color: overdueColor,
    },
    {
        id: 8,
        parentId: 4,
        task: {
            title: 'Sub Task Name',
            content: 'subtask content',
        },
        priority: 'Medium',
        status: 'Skipped',
        isSubTask: true,
        color: overdueColor,
    },
    {
        id: 9,
        parentId: 1,
        task: {
            title: 'Magna Industries',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...'
        },
        evaluation: 'Lacus quisque...',
        priority: 'Medium',
        dueDate: '06/29/2020',
        age: 1,
        status: 'Skipped',
        color: overdueColor,
    },
]