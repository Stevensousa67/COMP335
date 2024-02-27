# from bs4 import BeautifulSoup
# import requests

# def extract_game_details(game, include_scores=False):
#     date_time = game.find('div', class_='partida-data').find("span").get_text(strip=True)
#     stadium = game.find('div', class_='partida-data').find(text=True, recursive=False).strip()
#     tournament = game.find('div', class_='partida-campeonato').get_text(strip=True)
    
#     home_team_abbr = game.find('picture', class_='mandante').find('abbr').get_text(strip=True)
#     away_team_abbr = game.find('picture', class_='visitante').find('abbr').get_text(strip=True)
    
#     game_details = {
#         'date_time': date_time,
#         'stadium': stadium,
#         'tournament': tournament,
#         'home_team_abbr': home_team_abbr,
#         'away_team_abbr': away_team_abbr
#     }
    
#     if include_scores:
#         score_elements = game.find('div', class_='versus').find_all('span')
#         home_team_score = score_elements[0].get_text(strip=True)
#         away_team_score = score_elements[2].get_text(strip=True)
#         game_details['home_team_score'] = home_team_score
#         game_details['away_team_score'] = away_team_score
    
#     return game_details

# def extract_games(soup, upcoming=True):
#     games = []
#     match_sections = soup.find_all('section', class_='agenda-partidas')

#     for match_section in match_sections:
#         games_html = match_section.find_all('div', class_='partida' if upcoming else 'partida-finalizada')
#         for game_html in games_html:
#             game_details = extract_game_details(game_html, include_scores=not upcoming)
#             games.append(game_details)
    
#     return games

# webpage = requests.get("https://atletico.com.br/futebol/agenda/")
# soup = BeautifulSoup(webpage.text, 'html.parser')

# print("Upcoming Games HTML:")
# match_sections = soup.find_all('section', class_='agenda-partidas')
# for match_section in match_sections:
#     games_html = match_section.find_all('div', class_='partida')
#     print(games_html)

# print("\nPast Games HTML:")
# for match_section in match_sections:
#     games_html = match_section.find_all('div', class_='partida-finalizada')
#     print(games_html)

# upcoming_games = extract_games(soup, upcoming=True)
# past_games = extract_games(soup, upcoming=False)

# print("\nUpcoming Games:")
# print(upcoming_games)

# print("\nPast Games:")
# print(past_games)

from bs4 import BeautifulSoup
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
}

webpage = requests.get("https://atletico.com.br/futebol/agenda/", headers=headers)
soup = BeautifulSoup(webpage.text, 'html.parser')

print(soup.prettify())
