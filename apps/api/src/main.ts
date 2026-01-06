import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe, Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const logger = new Logger('Bootstrap')
  const environment = configService.get<string>('NODE_ENV')

  app.use(helmet())

  // global validation (refuses bad JSON)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  // CORS
  const frontendUrl = configService.get<string>('FRONTEND_URL')
  const corsOrigin = frontendUrl ?? (environment === 'development' ? true : undefined)

  app.enableCors({
    origin: corsOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })

  // Swagger - only in Development
  if (environment === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Grocery Helper API')
      .setDescription('The recipes and shopping list API')
      .setVersion('1.0')
      .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)
    logger.log(
      `Swagger UI is active: http://localhost:${configService.get('API_PORT') || 3000}/api/docs`,
    )
  } else {
    logger.log('Swagger UI is disabled in production.')
  }

  app.enableShutdownHooks()

  const port = configService.get<number>('API_PORT') || 3000
  await app.listen(port)
  logger.log(`Application is running on: http://localhost:${port}`)
}
bootstrap()
