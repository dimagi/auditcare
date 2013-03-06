function(doc) {
    try {
        if (doc.doc_type == "AccessAudit")
        {
            var ret = new Document(); 
            function idx(obj) {
                for (var key in obj) {
                    switch (typeof obj[key]) {
                    case 'object':
                    idx(obj[key]);
                    break;
                    case 'function':
                    break;
                    default:
                    ret.add(obj[key]);
                    break;
                    }
                }
                };

                idx(doc);
            return ret;
        }
    }
    catch (err) {
        // lucene may not be configured, do nothing
    }   
} 