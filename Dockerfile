FROM mcr.microsoft.com/dotnet/core/sdk:3.1
WORKDIR /app
COPY . .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080/

ENTRYPOINT ["dotnet", "AspNetCore.Vuex.Sample.dll"]
