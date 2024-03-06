export default {
    name: 'projectWeb',
    type: 'document',
    title: 'projectWeb',
    fields: [
        {
            name:'name',
            type:'string',
            title:'title'
        },
        {
            name:'description',
            type:'string',
            title:'description'
        },
        {
            name:'image',
            type:'image',
            title:'image'
        },
        {
            name:'gitUrl',
            type:'url',
            title:'gitUrl'
        },
        {
            name:'previewUrl',
            type:'url',
            title:'previewUrl'
        },
    ]
}