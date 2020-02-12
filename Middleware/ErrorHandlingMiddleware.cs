using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace AspNetCore.Vuex.Sample.Middleware
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context /* other scoped dependencies */)
        {
            try
            {
                // must be awaited
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError;

            return WriteExceptionAsync(context, exception, code);
        }

        private static Task WriteExceptionAsync(HttpContext context, Exception exception, HttpStatusCode code)
        {
            var response = context.Response;
            response.ContentType = "application/json";
            response.StatusCode = (int)code;

            return response.WriteAsync(JsonConvert.SerializeObject(new
            {
                requestId = context.TraceIdentifier,
                message = exception.Message,
                code = code,
                exception = exception.InnerException == null ? exception.GetType().Name : exception.InnerException.GetType().Name
            }));
        }
    }
}
