import pandas as pd, random, eel

FILENAME = "Bobo.xls"
df = pd.read_excel(FILENAME)

eel.init('web')

@eel.expose
def get_winner():
    rd = random.randint(0, (df.shape[0] -1))
    print(df.loc[rd])
    new = df.loc[rd].to_list()
    new[0] = str(new[0])
    return new

@eel.expose
def get_randomizer():
    new = df['NIM'].to_list()
    return new
   

eel.start('index.html', size=(1280,600))
