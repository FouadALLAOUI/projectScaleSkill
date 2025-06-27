'use client';

import { useState } from 'react';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserRound, UserPlus } from 'lucide-react';

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="login"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <UserRound className="h-4 w-4" />
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
