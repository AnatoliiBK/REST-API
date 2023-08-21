const { HttpError } = require('../helpers');

const validateBody = schema => {
    const func = (req, resp, next) => {
        const missingField = schema._ids._byKey.size !== Object.keys(req.body).length;
        
        if (Object.keys(req.body).length === 0) {
            return next(HttpError(400, 'missing fields'));
        }

        const { error } = schema.validate(req.body);

        if (error) {
            if (missingField) {
                next(HttpError(400, `missing required ${error.details[0].path[0]} field`)
            );
            } else {
                next(HttpError(400, error.message));
            }
        }

        next();
    };
    return func;
};

module.exports = validateBody;




// const { HttpError } = require('../helpers');

// const validateBody = schema => {
//     const func = (req, resp, next) => {
//         if (Object.keys(req.body).length === 0) {
//             return next(HttpError(400, 'missing fields'));
//         }

//         const { error } = schema.validate(req.body);

//         if (error) {
//             return next(HttpError(400, error.message));
//         }

//         next();
//     };
//     return func;
// };

// module.exports = validateBody;


// const {HttpError} = require('../helpers');

// const validateBody = schema => {
//     const func = (req, resp, next) => {
//     const { error } = schema.validate(req.body);
    
//       if (error) {
//         next(HttpError(400, error.message));
//       }
//       next();
//     }
//     return func;
// }

// module.exports = validateBody;