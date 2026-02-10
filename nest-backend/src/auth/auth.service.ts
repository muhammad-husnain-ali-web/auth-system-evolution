import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    try {
      const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
      createAuthDto.password = hashedPassword;
      await this.usersService.create(createAuthDto);
        return { success: true, message: "User registered successfully" };
    } catch (error) {
      throw error;
    }
  }

  async login(loginAuthDto: LoginAuthDto, response: any) {
    try {
      const user = await this.usersService.findByEmail(loginAuthDto.email);
      if (!user) {
        throw new UnauthorizedException({ success: false, message: "Invalid credentials" });
      }
      const isPasswordValid = await bcrypt.compare(loginAuthDto.password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException({ success: false, message: "Invalid credentials" });
      }

      const payload = { email: user.email, sub: user._id };
      const token = this.jwtService.sign(payload);
      response.cookie('token', token, {
      httpOnly: true,
      secure: false,
      path: '/',
      sameSite: 'lax',
      maxAge: 2 * 60 * 60 * 1000,
    });
      return { success: true, message: "Login successful" };
    } catch (error) {
      throw error;
    }
  }
  
  async logout(response: any) {
    try {
      response.clearCookie("token", {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });
    return { success: true, message: "Logout successfully" }
    } catch (error) {
      throw error;
    }
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
