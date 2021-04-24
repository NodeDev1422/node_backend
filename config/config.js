function getEnvValues(env) {
    var result;

    switch (env) {

        case 'local':
            result = {
                "MONGO_URL": "mongodb://ugxyr6vtxzdershcvetv:Y5tJ97wWZQVkynuaxYOH@b5bt2qa9brimuet-mongodb.services.clever-cloud.com:27017/crudapp",
                "MONGO_DB":"crudapp",
                'secret': 'ATHBKLOPCHKL',
                'session_timeout':900, //in 15minutes
                "SENDGRID_API_KEY":"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",
                "reset_url":"http://localhost:4200",
                "from_email":'phpngdeveloper@gmail.com',
            };
            break;
        case 'dev':
            result = {
                "MONGO_URL": "mongodb://127.0.0.1:27017/crudapp",
                "MONGO_DB":"crudapp",
                'secret': 'ATHBKLOPCHKL',
                'session_timeout':900, //in 15minutes
                "SENDGRID_API_KEY":"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",
                "reset_url":"http://localhost:4200",
                "from_email":'phpngdeveloper@gmail.com',
            };
            break;
        case 'QA':
            result = {
                "MONGO_URL": "mongodb://127.0.0.1:27017/crudapp",
                "MONGO_DB":"crudapp",
                'secret': 'supersecret',
                'session_timeout':900, //in 15minutes
                "SENDGRID_API_KEY":"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",
                "reset_url":"http://localhost:4200",
                "from_email":'phpngdeveloper@gmail.com',
            };
            break;
            
        case 'cloud':
            result = {
                "MONGO_URL": "mongodb://127.0.0.1:27017/crudapp",
                "MONGO_DB":"crudapp",
                'secret': 'ATHBKLOPCHKL',
                'session_timeout':900, //in 15minutes
                "SENDGRID_API_KEY":"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",
                "reset_url":"http://localhost:4200",
                "from_email":'phpngdeveloper@gmail.com',
            };
            break;
            

        default:
            result = {
                "MONGO_URL": "mongodb://ugxyr6vtxzdershcvetv:Y5tJ97wWZQVkynuaxYOH@b5bt2qa9brimuet-mongodb.services.clever-cloud.com:27017/crudapp",
                "MONGO_DB":"crudapp",
                'secret': 'ATHBKLOPCHKL',
                'session_timeout':900, //in 15minutes
                "SENDGRID_API_KEY":"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",
                "reset_url":"http://localhost:4200",
                "from_email":'phpngdeveloper@gmail.com',
            };
            break;

    }


    return result;


}

module.exports = { getEnvValues };
