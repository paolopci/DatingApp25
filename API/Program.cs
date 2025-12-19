using API.Data;
using API.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiConnection"));
});
builder.Services.AddCorsPolicies();

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();
