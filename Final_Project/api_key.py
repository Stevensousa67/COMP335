import re, requests, pandas as pd

def build_payload(query, start=1, num=10, date_restrict='m1', **params):
    """
    Function to build the payload for the Google Search API request.

    :param query: Search term
    :param start: The index of the first result to return
    :param link_site: Specifies that all search results should contain a link to a particular URL
    :param search_type: Type of search (default is unrestricted, 'IMAGE' for image search)
    :param date_restrict: Restricts results based on recency (default is one month 'm1')
    :param params: Additional parameters for the API requests

    :return: Dictionary containing the API requests parameters
    """

    payload = {
        'key': API_KEY,
        'q': query,
        'cx': search_engine_ID,
        'start': start,
        'num': num,
        'dateRestrict': date_restrict,
    }

    payload.update(params)
    return payload

def make_request(payload):
    """
    Function to send a GET request to the Google Search API and handle potential errors.

    :param: payload: Dictionary containing the API request parameters
    :return: JSON response from the API
    """

    response = requests.get('https://www.googleapis.com/customsearch/v1', params=payload)
    if response.status_code != 200:
        raise Exception('Request Failed')
    return response.json()

def clean_filename(filename):
    """
    Function to clean up string to be used as a filename.

    :param filename: The original string to be cleaned up
    :return: Cleaned up string safe for use as a filename
    """

    filename = re.sub(r'[\\/*?:"<>|]', "", filename)
    return filename


def main(query, result_total=10):
    """
    Main function to execute the script.
    """

    items = []
    reminder = result_total & 10
    if reminder > 0:
        pages = (result_total // 10) + 1
    else:
        pages = (result_total // 10)
    
    for i in range(pages):
        if pages == i + 1 and reminder > 0:
            payload = build_payload(query, start=(i+1)*10, num=reminder)
        else:
            payload = build_payload(query, start=(i+1)*10)
        response = make_request(payload)
        items.extend(response['items'])
    
    query_string_clean = clean_filename(query)
    df = pd.json_normalize(items)
    df.to_excel('Google Search Result_{0}.xlsx'.format(query_string_clean), index=False)



if __name__ == '__main__':
    API_KEY = 'AIzaSyCSxgHOMAQQYZiSosfdB25xx1-R7cmAJMw'
    search_engine_ID = 'a7741fba2fcd7464b'
    search_query = 'Atletico-MG'
    total_results = 10
    main(search_query, total_results)