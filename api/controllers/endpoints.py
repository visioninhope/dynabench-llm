import bottle

import common.auth as _auth

import logging
import json

@bottle.post('/endpoints/<endpoint>')
@_auth.requires_auth
def invoke_endpoint(credentials, endpoint):
    """Takes context and hypothesis, invokes Sagemaker model endpoint and returns the prediction results
    ----------
    request - json object in below format
    {
        "context": "Please pretend you a reviewing a place, product, book or movie.",
        "hypothesis": "It was a nice movie"
    }

    returns - a json object with probability and signed
    """

    sagemaker_client = bottle.default_app().config['sagemaker_client']
    payload = bottle.request.json
    if 'hypothesis' not in payload or 'context' not in payload or len(payload['hypothesis']) < 1 or \
            len(payload['context']) < 1:
        bottle.abort(400, 'Missing data')

    # Invoke sagemaker endpoint to get model result
    try:
        logging.info("Example: {}".format(payload['hypothesis']))
        response = sagemaker_client.invoke_endpoint(EndpointName=endpoint,
                                       ContentType='application/json',
                                       Body=json.dumps(payload))
    except Exception as error_message:
        logging.info('Error in prediction: %s' % (error_message))
        bottle.abort(400, 'Error in prediction: %s' % (error_message))

    result = response['Body'].read()
    logging.info('Model response %s' % (result))

    return result