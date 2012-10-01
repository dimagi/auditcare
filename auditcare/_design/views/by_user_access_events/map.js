function(doc) {
    // !code util/shared_funcs.js

    //basic emission of events by date, but filterable by the event itself.
    if(doc.doc_type == 'AccessAudit') {
        var date = parse_date(doc.event_date);
        //raw by time by event
        emit([doc.user, date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), doc.doc_type], null);
    }
}