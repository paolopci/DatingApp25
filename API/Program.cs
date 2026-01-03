using API.Data;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Middleware;
using API.Interfaces;
using API.Data.Repositories;
using API.Mappers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiConnection"));
});

builder.Services.AddScoped<IMemberRepository, MemberRepository>();

builder.Services.AddSingleton<UserMapper>();

builder.Services.AddCorsPolicies();

builder.Services.AddJwtAuthentication(builder.Configuration);

builder.Services.AddControllers();

var app = builder.Build();

// error middleware
app.UseMiddleware<ExceptionMiddleware>();

// Configure the HTTP request pipeline.
app.UseCors("CorsPolicy");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
