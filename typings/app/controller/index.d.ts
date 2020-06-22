// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHomeController from '../../../app/controller/HomeController';

declare module 'egg' {
  interface IController {
    homeController: ExportHomeController;
  }
}
