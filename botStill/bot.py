import discord
from discord.ext import commands
from discord.ext.commands import Bot
import asyncio
import chalk
import requests
import io

bot = commands.Bot(command_prefix='#')

@bot.event 
async def on_ready():
    print ("HORA DO SHOW PORRA!")
    print ("TA SAINDO DA JAULA O MONSTRO!!! " + bot.user.name)
    print ("È 13 MEMO PORRA.BIRRRRRRRRRlll. ID: " + bot.user.id)

@bot.command(pass_context=True) 
async def ping(ctx):
    await bot.say(":middle_finger:  Pong filho da puta!!") 
    print ("*************È TUDO NOSSO*******************")

@bot.command(pass_context=True) 
async def Ping(ctx):
    await bot.say(":middle_finger:  Pong filho da puta!!")
    print ("*************È TUDO NOSSO*******************")

@bot.command(pass_context=True) 
async def info(ctx, user: discord.Member):
    embed = discord.Embed(title="{}".format(user.name),descripition ="", color = 0xD8188B) 
    embed.add_field(name="Nome", value=user.name, inline=True)
    embed.add_field(name="ID", value=user.id, inline=True)
    embed.add_field(name="Status", value=user.status, inline=True)
    embed.add_field(name="Cargo", value=user.top_role, inline=True)
    embed.add_field(name="Parte da Alcateia Desde:", value=user.joined_at, inline=True)
    embed.set_thumbnail(url=user.avatar_url)
    await bot.say(embed=embed) 

    
@bot.command(pass_context=True)
async def serverinfo(ctx):
    embed = discord.Embed(name="{}".format(ctx.message.server.name),descripition ="", color = 0xD8188B) 
    embed.set_author(name= "WOLF. ALPHA.")
    embed.add_field(name="Nome", value=ctx.message.server.name, inline=True)
    embed.add_field(name="ID", value=ctx.message.server.id, inline=True)
    embed.add_field(name="Cargos", value=len(ctx.message.server.roles), inline=True)
    embed.add_field(name="Membros", value=len(ctx.message.server.members))
    embed.set_thumbnail(url=ctx.message.server.icon_url)
    await bot.say (embed=embed)
    
   
    

@bot.command(pass_context=True)
async def kick(ctx, user: discord.Member):
    await bot.say(":sob:  Pede pra nerfar NUB!, {}. Game Over!".format(user.name)) 
    await bot.kick(user)

@bot.command(pass_context=True)
async def duel(ctx, user: discord.Member):
    await bot.say(":sob:  Pede pra nerfar NUB!, {}. Game Over!".format(user.name)) 
    


    
    

    

bot.run("")