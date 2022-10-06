// ************ Requires ************

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


// ************ Controllers ************

const mainController = {

    home: function (req, res) {

        fetch("https://payments.smsdata.com/api/v1/currencies", {
            headers: {
                'X-Merchant-Id': '2cef36e3-60f3-4c05-9963-50d1cd692db7',
            }
        }).then(response => response.json())
            .then(result => {

                res.render("index", { result })

            }).catch((error) => {
                console.error('Error:', error);
            });
    },

    procces: function (req, res) {

        let data = {
            expected_output_amount: req.body.importe,
            input_currency: req.body.moneda,
            notes: req.body.concepto
        }


        fetch('https://payments.smsdata.com/api/v1/orders/', {
            method: 'POST',
            headers: {
                'X-Merchant-Id': '2cef36e3-60f3-4c05-9963-50d1cd692db7',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                res.redirect(result.web_url)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}


module.exports = mainController;