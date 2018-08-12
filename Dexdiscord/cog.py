import discord
from discord.ext import commands
from discord.ext.commands import Bot
import asyncio
import chalk
import requests
import io


class TestCog:
   
    def __init__(self, bot):
        
        self.bot = bot
    
    @commands.command(pass_context=True)
    async def help(self):
        embed = discord.Embed(title="{}".format("Comandos: "),descripition ="", color = 0xA901DB) 
        embed.add_field(name="d!", value="d!<nome do pokemon>, seleciona o pokemon desejado.", inline=True)
        embed.add_field(name="d!Mega", value="d!Mega<nome do pokemon><X ou Y> (se existir), seleciona a versão Mega desejada.", inline=True)
        embed.set_thumbnail(url='https://i.pinimg.com/originals/54/ac/33/54ac33981c055c0d2a7beddab599aad0.png')
        await self.bot.say (embed=embed)
    
   

    

def setup(bot):
    bot.add_cog(TestCog(bot))

    